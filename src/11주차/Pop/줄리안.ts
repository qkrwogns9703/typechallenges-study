type Pop<T extends any[]> = T extends [...infer R, infer K] ? [...R] : [];
