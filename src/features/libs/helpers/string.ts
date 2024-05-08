interface capitalizeFirstLetter {
    value: string;
}

export const capitalizeFirstLetter = ({value}: capitalizeFirstLetter) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
