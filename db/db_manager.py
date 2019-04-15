import config.config as conf
import sqlite3
from sqlite3 import Error
import numpy as np
import io
from peewee import *


db = SqliteDatabase(conf.sqlite_db_file)

######helper functions#########
def adapt_array(arr):
    """
    http://stackoverflow.com/a/31312102/190597 (SoulNibbler)
    """
    out = io.BytesIO()
    np.save(out, arr)
    out.seek(0)
    return sqlite3.Binary(out.read())

def convert_array(text):
    out = io.BytesIO(text)
    out.seek(0)
    return np.load(out)

def adaptnp(obj):
    if type(obj) is np.ndarray:
        return adapt_array(obj)
    else:
        return convert_array(obj)

######Tables#########
class Embedding(Model):
    word = CharField(primary_key=True)
    idf = IntegerField()
    vec = BareField(adapt=adaptnp)

    def save(self):
        super(Embedding, self).save(force_insert=True)

    class Meta:
        database = db

class App_metadata(Model):
    app_param = CharField(primary_key=True)
    param_val = CharField()

    def save(self):
        super(App_metadata, self).save(force_insert=True)
    class Meta:
        database = db

class Tweet(Model):
    idx = BigIntegerField(primary_key=True)
    tweetid = BigIntegerField()
    userid = BigIntegerField(index=True)
    msg = TextField()
    vec = BareField(adapt=adaptnp)
    time = DateTimeField(index=True)

    def save(self):
        super(Tweet, self).save(force_insert=True)
    class Meta:
        database = db

class User(Model):
    idx = IntegerField(primary_key=True)
    userid = BigIntegerField(index=True)
    name = CharField()
    tweetsnum = IntegerField(null=True)
    density = FloatField(null=True)
    cosine_density = FloatField(null=True)
    centroid = BareField(adapt=adaptnp, null=True)

    def save(self):
        super(User, self).save(force_insert=True)
    class Meta:
        database = db


class Cosinecentroid(Model):
    idx = IntegerField(primary_key=True)
    userid = BigIntegerField(index=True)
    cos_density = FloatField(null=True)
    cos_centroid = BareField(adapt=adaptnp, null=True)

    def save(self):
        super(Cosinecentroid, self).save(force_insert=True)
    class Meta:
        database = db