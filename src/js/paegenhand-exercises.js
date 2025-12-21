import { exercises } from '../data/exercises.js';

let exerciseList = [];

export const listExercises = () => {
    exerciseList = exercises;
    displayExercises(exerciseList);
};

export { exerciseList as exercises };

const initApp = () => {
    console.log('Laddar övningar för På egen hand!');
    listExercises();
};

const displayExercises = (exercises) => {
    const app = document.querySelector('#exercises');
    if (!app) {
        console.error('Elementet #exercises hittades inte!');
        return;
    }

    app.innerHTML = '';

    for (let exercise of exercises) {
        const div = document.createElement('div');
        const imageAnchor = document.createElement('a');
        const image = document.createElement('img');
        const exerciseCardBody = document.createElement('div');
        const heading = document.createElement('h3');
        const p = document.createElement('p');
        const small = document.createElement('small');

        div.classList.add('exercisecard');
        imageAnchor.href = `./exercise-details.html?id=${exercise.id}`;
        image.alt = `${exercise.title}`;
        image.src = `../images/saragungar${exercise.id}.jpg`;

        imageAnchor.appendChild(image);
        div.appendChild(imageAnchor);

        exerciseCardBody.classList.add('exercisecard-body');
        heading.classList.add('exercisecard-title');
        heading.textContent = exercise.title;

        const difficultyText = document.createElement('p');
        difficultyText.textContent = `Svårighetsgrad: ${exercise.difficulty}`;

        const durationText = document.createElement('p');
        durationText.textContent = `Längd: ${exercise.duration}`;

        const availabilityText = document.createElement('p');
        availabilityText.textContent = `${exercise.classroom
            ? 'Övning finns både online och som video'
            : 'Endast online-övning'}`;

        small.appendChild(difficultyText);
        small.appendChild(durationText);
        small.appendChild(availabilityText);

        p.appendChild(small);
        exerciseCardBody.appendChild(heading);
        exerciseCardBody.appendChild(p);
        div.appendChild(exerciseCardBody);
        app.appendChild(div);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
