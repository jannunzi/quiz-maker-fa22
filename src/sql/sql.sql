-- average likes per post
SELECT r.post_id, AVG(likes) AS 'avg_likes_per_post'
FROM ratings r
GROUP BY r.post_id;

CREATE VIEW `avg_likes_per_post` AS
SELECT r.post_id, AVG(likes) AS 'avg_likes_per_post'
FROM ratings r
GROUP BY r.post_id;


-- average likes per blog
SELECT b.id, AVG(alp.avg_likes_per_post) AS 'avg_likes_per_blog'
FROM blogs b, posts p, avg_likes_per_post alp
WHERE b.id=p.blog
AND p.id=alp.post_id
GROUP BY b.id;

-- average likes per blog
CREATE VIEW `avg_likes_per_blog` AS
SELECT b.id, AVG(alp.avg_likes_per_post) AS 'avg_likes_per_blog'
FROM blogs b, posts p, avg_likes_per_post alp
WHERE b.id=p.blog
AND p.id=alp.post_id
GROUP BY b.id;


-- average likes for specific blog
SELECT b.id, AVG(alp.avg_likes_post) AS 'avg_likes_for_blog'
FROM blogs b, posts p, avg_likes_per_post alp
WHERE b.id=2
AND b.id=p.blog
AND p.id=alp.post_id
GROUP BY b.id;


CREATE FUNCTION `avg_likes_all_blogs` ()
RETURNS FLOAT
BEGIN

	DECLARE avg_likes FLOAT;

	SELECT AVG(avg_likes_per_blog) AS 'avg_likes_across_blogs'
	FROM avg_likes_per_blog alb INTO avg_likes;

	RETURN avg_likes;

END


-- function average likes for specific blog
CREATE FUNCTION `avg_likes_for_blog` (blog_id INT)
RETURNS FLOAT
BEGIN
	DECLARE likes FLOAT;

	SELECT AVG(alp.avg_likes_per_post) AS 'avg_likes'
	FROM blogs b, posts p, avg_likes_per_post alp
	WHERE b.id=blog_id
	AND b.id=p.blog
	AND p.id=alp.post_id
	GROUP BY b.id
    INTO likes;

	RETURN likes;
END


-- blogs with higher likes than average
SELECT b.name, avg_likes_for_blog(b.id)
FROM blogs b
WHERE avg_likes_for_blog(b.id) > avg_likes_all_blogs();

-- retrieve all blog records
CREATE PROCEDURE `find_all_blogs` ()
BEGIN
	SELECT * FROM blogs;
END$$

CREATE PROCEDURE `find_blogs_for_user` (user_id INT)
BEGIN
	SELECT * FROM blogs
    WHERE blogs.user = user_id;
END


CREATE PROCEDURE `find_blog_by_id` (blog_id INT)
BEGIN
	SELECT * FROM blogs
    WHERE blogs.id = blog_id;
END

CREATE PROCEDURE `find_blogs_for_user` (user_id INT)
BEGIN
	SELECT * FROM blogs
    WHERE blogs.user_id = user_id;
END

CREATE PROCEDURE `create_blog_for_user` (
	user_id INT,
    blog_name VARCHAR(45),
    topic VARCHAR(45))
BEGIN
	INSERT INTO blogs (`user_id`, `name`, `topic`)
    VALUES (user_id, blog_name, topic);
END

CREATE PROCEDURE `update_blog` (
	blog_id INT,
    new_name VARCHAR(45),
    new_topic VARCHAR(45))
BEGIN
	UPDATE blogs
    SET name=new_name, topic=new_topic;
END

CREATE PROCEDURE `delete_blog` (blog_id INT)
BEGIN
	DELETE FROM blogs
    WHERE blogs.id = blog_id;
END


CREATE PROCEDURE `create_random_blogs` (count INT, user_id INT)
BEGIN
  DECLARE i INT DEFAULT 0;
  DECLARE random_post_fix INT;
  DECLARE random_blog_name VARCHAR(45);

  WHILE i < count - 1 DO
    SET i = i + 1;
	SET random_post_fix = RAND() * 100;
    SET random_blog_name = CONCAT('RANDOM BLOG ', random_post_fix);
	INSERT INTO blogs (`name`, `topic`)
    VALUES    (random_blog_name, 'SPACE');
  END WHILE;
END;


-- average likes for specific blog, e.g., blog_id=2
SELECT *
FROM avg_likes_per_blog
WHERE blog_id=2;


CREATE FUNCTION avg_likes_for_blog (blog_id INT)
RETURNS float
BEGIN
	DECLARE avg_likes FLOAT;
	SELECT avg_likes_per_blog AS `avg_likes_for_blog`
	FROM avg_likes_per_blog alpb
	WHERE alpb.blog_id=blog_id
    LIMIT 1
    INTO avg_likes;
RETURN avg_likes;
END


-- blogs with higher likes than average
SELECT b.name, avg_likes_for_blog(b.id)
FROM blogs b
WHERE avg_likes_for_blog(b.id) > avg_likes_all_blogs();
