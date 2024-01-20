from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.
class Mission(models.Model):
    description=models.CharField(max_length=200)

    def __str__(self):
        return self.description

class Vision(models.Model):
     description=models.CharField(max_length=200)
    
class Curriculum(models.Model):
    starting=models.CharField(max_length=50)
    ending=models.CharField(max_length=50)

    def __str__(self):
        return f"{self.starting} - {self.ending}"
    
class Syllabus(models.Model):
    upCurriculum=models.ForeignKey(Curriculum, on_delete=models.CASCADE)
    program=models.CharField(max_length=50)
    selectedOption=models.CharField(max_length=50)
    yearValue=models.CharField(max_length=50)
    semesterValue=models.CharField(max_length=50)
    session=models.CharField(max_length=50)
    

    def __str__(self):
        return f"{self.upCurriculum} - {self.program} - {self.selectedOption} - {self.yearValue} - {self.semesterValue} - {self.session}"

class PEO(models.Model):
    upSyllabus=models.ForeignKey(Syllabus, on_delete=models.CASCADE)
    descriptionPEO=models.CharField(max_length=200)

    def __str__(self):
        return f"{self.upSyllabus} - {self.descriptionPEO}"

class PLO(models.Model):
    descriptionPLO=models.CharField(max_length=50)

    def __str__(self):
        return self.descriptionPLO    
    

class CLO(models.Model):
   descriptionCLO = models.CharField(max_length=200)
   knowledge_level = models.CharField(max_length=200)

def __str__(self):
        return f"{self.descriptionCLO} - {self.knowledge_level}"

class Book_reference(models.Model):
   name = models.CharField(max_length=50)
   author = models.CharField(max_length=50)
   publisher =models.CharField(max_length=50)
   year =models.CharField(max_length=50)
   edition =models.CharField(max_length=50)


def __str__(self):
        return self.name ,self.author ,self.punlisher ,self.year ,self.edition
    
class Mapping(models.Model):
    peo = models.ForeignKey(PEO, on_delete=models.CASCADE)
    mission = models.ForeignKey(Mission, on_delete=models.CASCADE)
    correlation_level = models.IntegerField()

    def __str__(self):
        return f"{self.peo} - {self.mission} - {self.correlation_level}"
    
class Attitude(models.Model):
     description=models.CharField(max_length=200)   

class Skill(models.Model):
     description=models.CharField(max_length=200)   
class CO(models.Model):
     description=models.CharField(max_length=200)  





class Knowledge(models.Model):
     description=models.CharField(max_length=200)  


class PloMapPeo(models.Model):
    plo = models.ForeignKey(PLO, on_delete=models.CASCADE)
    peo = models.ForeignKey(PEO, on_delete=models.CASCADE)
    correlation_level = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return f"{self.plo} - {self.peo} - {self.correlation_level}"
    
class CloMapPlo(models.Model):
    clo = models.ForeignKey(CLO, on_delete=models.CASCADE)
    plo = models.ForeignKey(PLO, on_delete=models.CASCADE)
    correlation_level = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return f"{self.clo} - {self.plo} - {self.correlation_level}"  

