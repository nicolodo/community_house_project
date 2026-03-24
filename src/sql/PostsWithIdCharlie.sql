// FROM post p                                     
// JOIN users poster ON p.sender = poster.clerk_id 
// JOIN posts_reactions r ON p.id = r.post_id    
// JOIN users reactor ON r.user_id = reactor.clerk_id 
// ORDER BY p.id;