export interface Habit {
	userId: number;
	userNickname?: string;
	likes: number;
	habitName: string;
	progress: number;
	stickerImg: string;
	backgroundColor: string;
	startDate: string;
	endDate: string;
	checkedDates: string[];
	memo: string;
	habitId?: number;
}
