export interface Matric {
	eventName: string;
	scope: string;
}


export interface AnalyticsInterface{
	recordEvent(matric: Matric): void;
}