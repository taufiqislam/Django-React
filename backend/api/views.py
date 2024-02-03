from django.shortcuts import render
from rest_framework import viewsets ,generics
from .models import *
from .serializers import *
# Create your views here.
class MissionViewSet(viewsets.ModelViewSet):
    serializer_class = MissionSerial
    queryset = Mission.objects.all()

class PeoViewSet(viewsets.ModelViewSet):
    serializer_class= PEOSerial

    def get_queryset(self):
        up_syllabus_id = self.request.query_params.get('upSyllabus')

        if up_syllabus_id:
            return PEO.objects.filter(upSyllabus=up_syllabus_id)

        return PEO.objects.all()

    
   

class PloViewSet(viewsets.ModelViewSet):
    serializer_class= PLOSerial
    def get_queryset(self):
        up_syllabus_id = self.request.query_params.get('upSyllabus')

        if up_syllabus_id:
            return PLO.objects.filter(upSyllabus=up_syllabus_id)

        return PLO.objects.all()       

class CloViewSet(viewsets.ModelViewSet):
    serializer_class= CLOSerial
    def get_queryset(self):
        up_course_id = self.request.query_params.get('upCourse')
        if up_course_id:
            return CLO.objects.filter(upCourse=up_course_id)
        return CLO.objects.all()  

class BookViewSet(viewsets.ModelViewSet):
    serializer_class= BookSerial
    queryset=Book_reference.objects.all()     
   
class MappingViewSet(viewsets.ModelViewSet):
    serializer_class = MappingSerializer
    def get_queryset(self):
        up_syllabus_id = self.request.query_params.get('upSyllabus')

        if up_syllabus_id:
            return Mapping.objects.filter(upSyllabus=up_syllabus_id)

        return Mapping.objects.all()

class AttitudeViewSet(viewsets.ModelViewSet):
    serializer_class = AttitudeSerial
    def get_queryset(self):
        up_course_id = self.request.query_params.get('upCourse')
        if up_course_id:
            return Attitude.objects.filter(upCourse=up_course_id)
        return Attitude.objects.all()    


class SkillViewSet(viewsets.ModelViewSet):
    serializer_class = SkillSerial
    def get_queryset(self):
        up_course_id = self.request.query_params.get('upCourse')
        if up_course_id:
            return Skill.objects.filter(upCourse=up_course_id)
        return Skill.objects.all()       

class COViewSet(viewsets.ModelViewSet):
    serializer_class = COSerial   
    def get_queryset(self):
        up_course_id = self.request.query_params.get('upCourse')
        if up_course_id:
            return CO.objects.filter(upCourse=up_course_id)
        return CO.objects.all()

class VisionViewSet(viewsets.ModelViewSet):
    queryset = Vision.objects.all()
    serializer_class = VisionSerial      

class KnowledgeViewSet(viewsets.ModelViewSet):
    serializer_class = KnowledgeSerial
    def get_queryset(self):
        up_course_id = self.request.query_params.get('upCourse')
        if up_course_id:
            return Knowledge.objects.filter(upCourse=up_course_id)
        return Knowledge.objects.all()               

class PloMapPeoViewSet(viewsets.ModelViewSet):
    serializer_class = PloMapPeoSerializer
    def get_queryset(self):
        up_syllabus_id = self.request.query_params.get('upSyllabus')

        if up_syllabus_id:
            return PloMapPeo.objects.filter(upSyllabus=up_syllabus_id)

        return PloMapPeo.objects.all()       

class CloMapPloViewSet(viewsets.ModelViewSet):
    serializer_class = CloMapPloSerializer
    def get_queryset(self):
        up_course_id = self.request.query_params.get('upCourse')
        if up_course_id:
            return CloMapPlo.objects.filter(upCourse=up_course_id)
        return CloMapPlo.objects.all()    

class CurriculumViewSet(viewsets.ModelViewSet):
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer   

class SyllabusViewSet(viewsets.ModelViewSet):
    serializer_class = SyllabusSerializer

    def get_queryset(self):
        up_curriculum_id = self.request.query_params.get('upCurriculum')
        if up_curriculum_id:
            return Syllabus.objects.filter(upCurriculum=up_curriculum_id)
        return Syllabus.objects.all()
    
class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    def get_queryset(self):
        up_syllabus_id = self.request.query_params.get('upSyllabus')

        if up_syllabus_id:
            return Course.objects.filter(upSyllabus=up_syllabus_id)

        return Course.objects.all()       

