export interface Habit {
	id: number;
	likes: number;
	name: string;
	progress: number;
	sticker_img: string;
	background_color: string;
	start_date: string;
	end_date: string;
	checks: string[];
	memo: string;
}
