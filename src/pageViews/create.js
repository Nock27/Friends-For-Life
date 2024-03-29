import { html } from '../../node_modules/lit-html/lit-html.js'
import * as animalService from "../services/animalService.js"

const createTemplate = (createPetHandler) => html`
    <section id="createPage">
        <form class="createForm" @submit=${createPetHandler}>
            <img src="./images/animal-icon-create.png">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>
`




export const createView = (ctx) => {
    const createPetHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const breed = formData.get('breed');
        const age = formData.get('age');
        const weight = formData.get('weight');
        const image = formData.get('image');
        if(name.length !== 0 && breed.length !== 0 && age.length !== 0 && weight.length !== 0 && image.length !== 0){
            animalService.createOne(name,breed,age,weight,image)
                .then(() => {
                    
                    ctx.page.redirect('/dashboard');
                })
        }else{
            alert("All fields must be filled");
        }

    }
    ctx.render(createTemplate(createPetHandler));
}