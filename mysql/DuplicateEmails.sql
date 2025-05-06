
-- https://leetcode.com/problems/duplicate-emails/

select e.Email from (select Email, count(email) as freq from person group by email) e where freq > 1;