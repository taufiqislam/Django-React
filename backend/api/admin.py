from django.contrib import admin
from .models import *

# Register your models here.
class MissionAdmin(admin.ModelAdmin):
    list_display = ["description"]


admin.site.register(Mission,MissionAdmin)

class PEOAdmin(admin.ModelAdmin):
    list_display = ["upSyllabus","descriptionPEO"]

admin.site.register(PEO,PEOAdmin)    

class PLOAdmin(admin.ModelAdmin):
    list_display = ["descriptionPLO"]

admin.site.register(PLO,PLOAdmin)   

class CLOAdmin(admin.ModelAdmin):
    list_display = ["descriptionCLO","knowledge_level"]

admin.site.register(CLO,CLOAdmin)   


class BookAdmin(admin.ModelAdmin):
    list_display = ["name","author","publisher","year","edition"]

admin.site.register(Book_reference,BookAdmin)   
@admin.register(Mapping)
class MappingAdmin(admin.ModelAdmin):
    list_display = ["peo", "mission", "correlation_level"]

class AttitudeAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Attitude,AttitudeAdmin ) 


class SkillAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Skill,SkillAdmin )  


class COAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(CO,COAdmin )  
class VisionAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Vision,VisionAdmin ) 


class KnowledgeAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Knowledge,KnowledgeAdmin ) 


@admin.register(PloMapPeo)
class PloMapPeoAdmin(admin.ModelAdmin):
    list_display = ["plo_id", "peo_id", "correlation_level"]

@admin.register(CloMapPlo)
class CloMapPloAdmin(admin.ModelAdmin):
    list_display = ["clo_id", "plo_id", "correlation_level"]

@admin.register(Curriculum)
class CurriculumAdmin(admin.ModelAdmin):
    list_display = ["starting", "ending"]

@admin.register(Syllabus)
class SyllabusAdmin(admin.ModelAdmin):
    list_display = ["upCurriculum", "program", "selectedOption", "yearValue", "semesterValue", "session"]