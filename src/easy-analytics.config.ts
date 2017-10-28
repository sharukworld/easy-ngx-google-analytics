export class EasyAnalyticsConfig  {
    public gaTrackingId : string;
    public routesToIgnore? : any[];
    public urlTrimmerFunction? : (originalUrl: string) => string;
}