function calculateClockAngle(hour: number, minute: number): number {
    if (hour < 0 || hour >= 24 || minute < 0 || minute >= 60) {
        throw new Error("Invalid input. Please provide valid hour and minute values.");
    }

    const adjustedHour = hour % 12;
    const hourAngle = 0.5 * (60 * adjustedHour + minute);
    const minuteAngle = 6 * minute;

    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
        angle = 360 - angle;
    }

    return angle;
}

const hour = 17;
const minute = 30;

const clockAngle = calculateClockAngle(hour, minute);
