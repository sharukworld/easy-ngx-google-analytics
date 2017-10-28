export class EasyAnalyticsConfig  {
    public gaTrackingId : string;
    public routesToIgnore? : any[];
     urlTrimmerFunction? : (originalUrl: string) => string;
}