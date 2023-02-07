import { ref } from "vue";

export default function ColorPickerLogic() {
    const colors = ["green", "red", "blue", "purple"];
    const message = ref("Pick a color...");

    const matchColor = (value) => {
        // do a random color based on the array index;
        const randomNumber = Math.floor(Math.random() * 3) + 1; //between 1 - 4

        if (colors[randomNumber] === value) {
            message.value = `You win... [answer: ${colors[randomNumber]}]`;
            return;
        }

        message.value = `You lose [answer: ${colors[randomNumber]}]`;
    };

    return { colors, message, matchColor };

}