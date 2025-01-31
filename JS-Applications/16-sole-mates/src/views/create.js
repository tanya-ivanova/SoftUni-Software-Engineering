import { createRecord } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand">
            <input type="text" name="model" id="shoe-model" placeholder="Model">
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url">
            <input type="text" name="release" id="shoe-release" placeholder="Release date">
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer">
            <input type="text" name="value" id="shoe-value" placeholder="Value">

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function createView(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const sole = {            
            brand: formData.get('brand'),
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            designer: formData.get('designer'),
            value: formData.get('value')
        };

        if (sole.brand === '' || sole.model === '' || sole.imageUrl === ''
        || sole.release === '' || sole.designer === '' || sole.value === '') {
            return alert('All fields are required!');
        }

        await createRecord(sole);
        event.target.reset();
        ctx.page.redirect('/catalog');
    }
}