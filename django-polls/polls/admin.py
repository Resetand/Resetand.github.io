from django.contrib import admin

from .models import Choice, Question

# admin.AdminSite.site_header = "Управляйте своим сайтом для опросов здесь!"

class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 0


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Ваш вопрос',               {'fields': ['question_text']}),
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text', 'pub_date')
admin.site.register(Question, QuestionAdmin)