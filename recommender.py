import sys

import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

from sqlalchemy import create_engine
import pymysql

pymysql.install_as_MySQLdb()
import MySQLdb

engine = create_engine("mysql://root:"+"!aiBBc2907d!"+"@localhost/SejongLab_debug", encoding='utf-8')
conn = engine.connect()

data = pd.read_sql_table('research', conn)
research_arr = np.array(data)

max_prof = np.array(pd.read_sql_table('professor', conn).iloc[:, 0]).max()
max_field = np.array(pd.read_sql_table('field', conn).iloc[:,0]).max()

prof_vector = np.zeros((max_prof, max_field))

for i in research_arr:
    prof_vector[i[0] - 1, i[1] - 1] = 1

stud_vector = np.zeros((1, max_field))

for i in sys.argv[1:]:
    stud_vector[0, int(i) - 1] = 1

cs = cosine_similarity(stud_vector, prof_vector)

results = cs.argsort()[0, cs[0, cs.argsort()[0]] != 0]

print(list(results))

conn.close()
