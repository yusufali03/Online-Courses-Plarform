from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin, UserAdmin
from .models import CustomUser
from django.utils.translation import gettext_lazy as _

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('phone_number', 'full_name','profile_picture', 'is_staff', 'is_active', 'date_joined')
    list_filter = ('is_staff', 'is_active', 'date_joined')
    search_fields = ('phone_number', 'full_name')
    ordering = ('-date_joined',)
    readonly_fields=('date_joined', 'last_login')

    fieldsets = (
        (None, {'fields': ('phone_number', 'password')}),
        (_('Personal Info'), {'fields': ('full_name',)}),
        (_('Personal Picture'), {'fields': ('profile_picture',)}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),

    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('phone_number', 'full_name', 'password1', 'password2', 'is_staff', 'is_active', 'profile_picture')}
        ),
    )

    # fieldsets = UserAdmin.fieldsets + (
    #     ('Profile Info', {
    #         'fields': ('full_name', 'profile_picture'),
    #     }),
    # )

    # add_fieldsets = UserAdmin.add_fieldsets + (
    #     ('Profile Info', {
    #         'fields': ('full_name', 'profile_picture'),
    #     }),
    # )

admin.site.register(CustomUser, CustomUserAdmin)
