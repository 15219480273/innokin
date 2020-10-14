from django.contrib import admin
from .models import Design


# Register your models here.
class DesignAdmin(admin.ModelAdmin):
    list_display = ["id", "author"]


admin.site.register(Design, DesignAdmin)
