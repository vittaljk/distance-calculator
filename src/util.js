export const calculateDistance = (point1, point2) => {
    // Convert degrees to radians
    const lat1 = point1.lat * Math.PI / 180;
    const lat2 = point2.lat * Math.PI / 180;
    const lon1 = point1.lng * Math.PI / 180;
    const lon2 = point2.lng * Math.PI / 180;

    // Haversine formula
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a = Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.pow(Math.sin(dlon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const R = 6371; // Radius of Earth in kilometers
    const distance = R * c;

    // Round distance to two decimal places
    return distance.toFixed(2);
};