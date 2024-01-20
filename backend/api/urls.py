from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'api/mission', MissionViewSet, 'mission')
router.register(r'api/peo', PeoViewSet, 'peo')
router.register(r'api/plo', PloViewSet, 'plo')
router.register(r'api/clo', CloViewSet, 'clo')
router.register(r'api/book', BookViewSet, 'book')
router.register(r'api/mappings', MappingViewSet, basename='mapping')
router.register(r'api/attitude',AttitudeViewSet , basename='attitude')
router.register(r'api/skill',SkillViewSet , basename='skill')
router.register(r'api/CO',COViewSet , basename='CO')
router.register(r'api/vision',VisionViewSet , basename='Vision')
router.register(r'api/knowledge',KnowledgeViewSet , basename='Knowledge')
router.register(r'api/plomappeo', PloMapPeoViewSet, basename='plomappeo')
router.register(r'api/clomapplo', CloMapPloViewSet, basename='clomapplo')
router.register(r'api/curriculum', CurriculumViewSet, basename='curriculum')
router.register(r'api/syllabus', SyllabusViewSet, basename='syllabus')
urlpatterns = router.urls