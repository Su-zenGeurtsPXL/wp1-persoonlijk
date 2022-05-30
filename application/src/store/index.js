import {createStore} from 'vuex';

let url = 'http://localhost:4005';

export default createStore({
        state: {
            lecturers: [],
            courses: [],
            error: '',
            courseDetails: [],
            lecturerDetails: []
        },
        getters: {
            numberOfCourses: (state) => state.courses.length,
            numberOfLecturers: (state) => state.lecturers.length
        },
        actions: {
            fetchCourses(state) {
                state.commit('_updateError', {error: ''});
                state.commit('_emptyCourses');
                fetch(`${url}/courses`)
                    .then((response) => {
                        if (response.status == 200) {
                            return response.json();
                        } else {
                            throw `error with status ${response.status}`;
                        }
                    })
                    .then((courses) => {
                        state.commit('_setCourses', {courses: courses});
                    })
                    .catch((error) => {
                        state.commit('_updateError', {error: error});
                    });
            }
        },
        mutations: {
            _emptyCourses(state) {
                state.courses = [];
            },
            _setCourses(state, payload) {
                state.courses = payload.courses;
            },
            _updateError(state, payload) {
                state.error = payload.error;
            }
        }
    }
)