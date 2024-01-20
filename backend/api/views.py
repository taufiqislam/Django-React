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
    queryset=PLO.objects.all()        

class CloViewSet(viewsets.ModelViewSet):
    serializer_class= CLOSerial
    queryset=CLO.objects.all()   

class BookViewSet(viewsets.ModelViewSet):
    serializer_class= BookSerial
    queryset=Book_reference.objects.all()     
   
class MappingViewSet(viewsets.ModelViewSet):
    queryset = Mapping.objects.all()
    serializer_class = MappingSerializer

class AttitudeViewSet(viewsets.ModelViewSet):
    queryset = Attitude.objects.all()
    serializer_class = AttitudeSerial


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerial    

class COViewSet(viewsets.ModelViewSet):
    queryset = CO.objects.all()
    serializer_class = COSerial   


class VisionViewSet(viewsets.ModelViewSet):
    queryset = Vision.objects.all()
    serializer_class = VisionSerial      

class KnowledgeViewSet(viewsets.ModelViewSet):
    queryset = Knowledge.objects.all()
    serializer_class = KnowledgeSerial           

class PloMapPeoViewSet(viewsets.ModelViewSet):
    queryset = PloMapPeo.objects.all()
    serializer_class = PloMapPeoSerializer

class CloMapPloViewSet(viewsets.ModelViewSet):
    queryset = CloMapPlo.objects.all()
    serializer_class = CloMapPloSerializer    

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

