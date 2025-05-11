from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['phone_number', 'password', 'full_name']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class UserLoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        phone_number = data.get('phone_number')
        password = data.get('password')
        user = authenticate(phone_number=phone_number, password=password)
        if not user:
            raise serializers.ValidationError("Incorrect credentials")
        data['user'] = user
        return data

class UserProfileSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(
        required=False,
        allow_null=True,
        use_url=False,
    )
    class Meta:
        model = CustomUser
        fields = ['id', 'phone_number', 'full_name', 'profile_picture']
        read_only_fields = ['id','phone_number']

    def to_representation(self, instance):
        # first get the default representation (with the raw model fields)
        data = super().to_representation(instance)

        # now replace the raw path with a full URL if we have a picture
        request = self.context.get('request')
        pic = instance.profile_picture
        if pic and request is not None:
            data['profile_picture'] = request.build_absolute_uri(pic.url)
        else:
            data['profile_picture'] = None

        return data


class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField(write_only=True)
    new_password     = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate_current_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Current password is incorrect.")
        return value

    def validate(self, data):
        if data['new_password'] != data['confirm_password']:
            raise serializers.ValidationError({
                'confirm_password': "New passwords do not match."
            })
        return data

    def save(self, **kwargs):
        user = self.context['request'].user
        user.set_password(self.validated_data['new_password'])
        user.save()
        return user

