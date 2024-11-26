export interface quizDto {
    id : string;
    name: string;
    state: string;
    attempt: number;
    duration: number;
    teacherId: string;
    sectionId: string;
    creTime: Date;
}