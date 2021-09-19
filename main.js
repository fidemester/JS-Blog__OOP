import {Post} from "./Post.js";
import {User} from "./User.js";
import {Blog} from "./Blog.js"

let post1= new Post("lorem", "ipsum dolor sit", 2);
Post.alka = function(){
    console.log("aahello")
};
console.log(post1.getPreview(5));
Post.alka()

const user1= new User("john", "DOe", "ff@ff.com");

console.log(user1.email, user1.fullName);
const blog1 = new Blog('My blog', user1);

console.log("blog1.posts", blog1.posts);

blog1.addPost(post1);

blog1.deletePost(1);
console.log(blog1.posts);

console.log('postbyId', blog1.getPostById(0))

