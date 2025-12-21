import { exercises } from '../data/exercises.js';

const initApp = () => {
    findExercise();
};

const findExercise = () => {
    const id = location.search.split('=')[1];
    const exercise = exercises.find((e) => e.id === +id);
    console.log(exercises);
    
    if (exercise) {
        displayExercise(exercise);
    } else {
        displayError();
    }
};

const displayExercise = (exercise) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="exercise-details-top">
        <div>
            ${exercise.image
                ? `<img src="../images/saragungar${exercise.id}.jpg" alt="${exercise.title}"/>`
                : ``}
        </div>
        <div class="info">
            <h2>${exercise.title}</h2>
            <h3>Instruktör: ${exercise.teacher}</h3>
            <p>${exercise.description}<br />
            Svårighetsgrad: <b>${exercise.difficulty}</b><br />
            Längd på övningen: <b>${exercise.duration}</b><br />
            
            ${exercise.classroom
                ? 'Övningen finns både som <b>video</b> och <b>online interaktiv</b>'
                : 'Övningen är <b>endast online interaktiv</b>'}<br /></p>
            
            <button class="start-exercise-btn">Starta övning</button>
        </div>
    </div>
    `;
    
    document.querySelector('#exercise-details')?.appendChild(div);
    
    // Lägg till event listener för start-knappen
    const startBtn = div.querySelector('.start-exercise-btn');
    startBtn?.addEventListener('click', () => startExercise(exercise));
};

const startExercise = (exercise) => {
    alert(`Startar övning: ${exercise.title}`);
    // Här kan du lägga till logik för att starta övningen
};

const displayError = () => {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
        <div class="error-message">
            <h2>Övningen kunde inte hittas</h2>
            <p>Tyvärr kunde vi inte hitta den övning du sökte efter.</p>
            <a href="../pages/paegenhand.html">Tillbaka till alla övningar</a>
        </div>
    `;
    document.querySelector('#exercise-details')?.appendChild(errorDiv);
};

console.log('Exercise details laddad');
document.addEventListener('DOMContentLoaded', initApp);
