export const calculateNotes = (amount) => {
    const notes = [50, 20, 10];
    const result = [];

    for (let note of notes) {
        const count = Math.floor(amount / note);
        if (count > 0) {
            result.push({ note, count });
            amount -= count * note;
        }
    }

    return result;
};