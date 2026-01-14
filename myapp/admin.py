from django.contrib import admin
from myapp.models import Article

# Register your models here.
class ArtcileModelAdmin(admin.ModelAdmin):
    list_display=('id','author','date')

admin.site.register(Article,ArtcileModelAdmin)