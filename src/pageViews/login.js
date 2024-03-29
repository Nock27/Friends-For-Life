import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js';


const loginTemplate = (submitHandler) => html`
    <section id="loginPage">
        <form class="loginForm" @submit=${submitHandler}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>

            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>

            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>

            <button class="btn" type="submit">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>
`

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        if(email.length == 0 || password.length == 0){
            alert('All fields must be filled');
            return;
        }
        authService.login(email,password)
            .then(() =>  ctx.page.redirect('/'))
       
    }
    ctx.render(loginTemplate(submitHandler));
}