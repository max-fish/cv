import { db } from "./firebase";

const getEducation = () => {
    db.collection('data')
        .doc('Education')
        .get()
        .then(doc => doc.data());
};

export { getEducation };

