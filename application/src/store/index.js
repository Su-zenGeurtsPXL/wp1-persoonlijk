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
            },
            fetchCourseId: function (state, payload) {
                state.commit('_updateError', {error: ''});
                state.commit('_emptyCourseId');
                let courseId = payload.courseId;
                fetch(`${url}/${courseId}`)
                    .then((response) => {
                        if (response.status == 200) {
                            return response.json();
                        } else {
                            throw `error with status ${response.status}`;
                        }
                    })
                    .then((course) => {
                        state.commit('_setCourseId', {course: course});
                    })
                    .catch((error) => {
                        state.commit('_updateError', {error: error});
                    });
            },
            fetchLecturerId: function (state, payload) {
                state.commit('_updateError', {error: ''});
                state.commit('_emptyLecturerId');
                let lecturerId = payload.lecturerId;
                fetch(`${url}/${lecturerId}`)
                    .then((response) => {
                        if (response.status == 200) {
                            return response.json();
                        } else {
                            throw `error with status ${response.status}`;
                        }
                    })
                    .then((lecturer) => {
                        state.commit('_setLecturerId', {lecturer: lecturer});
                    })
                    .catch((error) => {
                        state.commit('_updateError', {error: error});
                    });
            },
        },
        mutations: {
            _emptyCourses(state) {
                state.courses = [];
            },
            _setCourses(state, payload) {
                state.courses = payload.courses;
            },
            _emptyCoursesId(state) {
                state.course = [];
            },
            _setCoursesId(state, payload) {
                state.course = payload.course;
            },
            _emptyLecturerId(state) {
                state.lecturer = [];
            },
            _setLecturerId(state, payload) {
                state.lecturer = payload.lecturer;
            },
            _updateError(state, payload) {
                state.error = payload.error;
            }
        }
    }
)