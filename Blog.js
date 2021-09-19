import { Post } from './Post.js'

export class Blog {
    #title;
    #author;
    #posts = [];

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#fetchPost()
    }
    #fetchPost() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    this.#posts.push(new Post(item.title, item.body, item.id))
                }); 
                console.log("posts", this.posts)
            })
    }

    get posts() {
        return this.#posts;
    }

    addPost(postItem) {
        if (postItem instanceof Post) {
            this.#posts.push(postItem);
        }
        else {
            throw new Error('postItem is not an instance of Post Class')
        }

    }
    deletePost(postId) {
        const indexToDelete = this.posts.findIndex
            (item => item.id == postId);
        if (indexToDelete) {
            this.#posts.splice(indexToDelete, 1);
            return true
        }
        else return false
    }

    getPostById(postId) {
        return this.posts.find(item => item.id === postId) || null
    }
}

