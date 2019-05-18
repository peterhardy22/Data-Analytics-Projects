-- Create top_momaDB to import our 2 csv files as tables
CREATE DATABASE top_momaDB;

-- Use newly created database top_mongoDB
USE top_momaDB;

-- Query to find how many of the Top 500 Contemporary artists are inlcuded in MoMA's collection
SELECT top.top_500_rank, moma.artist_name
FROM moma
JOIN top_500_artists AS top
ON moma.artist_name = top.artist_name
WHERE top.top_500_rank < 500
GROUP BY moma.artist_name, top.top_500_rank
ORDER BY top.top_500_rank ASC; 