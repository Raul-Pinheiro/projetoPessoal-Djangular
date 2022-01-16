from django.db import models

# Create your models here.
class Book(models.Model):
    book_title  = models.CharField(db_column='DS_TITLE',max_length=100, null=True, blank=True)
    book_author = models.CharField(db_column='DS_AUTHOR',max_length=100, null=True,blank=True)
    book_price  = models.DecimalField(db_column='NR_PRICE', max_digits=10, decimal_places=2)

    def __str__(self):
        return self.book_title

    class Meta:
        db_table = 'Livros'