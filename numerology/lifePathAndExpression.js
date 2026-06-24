function calculateLifePathAndExpression(lifePath, expression) {
    let result = Math.abs(lifePath - expression);
    return result;
}

export { calculateLifePathAndExpression };