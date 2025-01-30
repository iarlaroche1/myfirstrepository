<template>
    <!-- Home Page Section -->

    <!-- Blog page section-->
    <div class="container">
        <h1>Welcome to my blog page</h1>
        <p>This is my blog page for my Study Buddy Finder app</p>
        <h1> This is where the links should be </h1>
        <router-link to="/">Go to Home</router-link>
        <br>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" v-model="handle" class="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
            <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>

        </div>


        <div class="mb-3 right">
            <!--@click is same as onclick-->
            <button type="button" @click="postComment" class="btn btn-primary">Post Comment</button>
        </div>
    </div>
</template>


<script>
/*
These two properties “handle” and
comment are bound to the inputs via the
v-model directive 

As the user types into the text boxes,
these will be populated with the value in
real-time and vice versa (week 15 slide 26)

This is two-way binding.
Initialised to contain no value, empty
string, i.e. two single quotes ‘
*/


import app from '../api/firebase'; //Import the exported app from api/firebase with the app config
import { getFunctions, httpsCallable } from
    "firebase/functions"; //Import the objects getFunctions and httpsCallable from firebase/functions
export default {
    data() {
        return {
            handle: '',
            comment: ''
        }
    },
    methods: {
        async postComment() {
            console.log(this.handle);
            console.log(this.comment);
            const functions = getFunctions(app); //Pass in the app config as a param to getFunctions
            const postComment =
                httpsCallable(functions, 'postcomment'); // Using httpsCallable, pass in functions and the name of the function you wish to call
            const result = await postComment(
                {
                    "handle": this.handle, 
                    "comment": this.comment 
                }); // Pass the object as an argument to postComment
            console.log(result);
        }
    }
}
</script>