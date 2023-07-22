// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Movies -->Single Movie.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.Movies.getMovie({
 *     tmdbId: 123,
 * });
 * ```
 */
export function getMovie(args: GetMovieArgs, opts?: pulumi.InvokeOptions): Promise<GetMovieResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("radarr:Movies/getMovie:getMovie", {
        "tmdbId": args.tmdbId,
    }, opts);
}

/**
 * A collection of arguments for invoking getMovie.
 */
export interface GetMovieArgs {
    /**
     * TMDB ID.
     */
    tmdbId: number;
}

/**
 * A collection of values returned by getMovie.
 */
export interface GetMovieResult {
    /**
     * List genres.
     */
    readonly genres: string[];
    /**
     * Movie ID.
     */
    readonly id: number;
    /**
     * IMDB ID.
     */
    readonly imdbId: string;
    /**
     * Availability flag.
     */
    readonly isAvailable: boolean;
    /**
     * Minimum availability.
     * Allowed values: 'tba', 'announced', 'inCinemas', 'released', 'deleted'.
     */
    readonly minimumAvailability: string;
    /**
     * Monitored flag.
     */
    readonly monitored: boolean;
    /**
     * Origina language.
     */
    readonly originalLanguage: outputs.Movies.GetMovieOriginalLanguage;
    /**
     * Movie original title.
     */
    readonly originalTitle: string;
    /**
     * Overview.
     */
    readonly overview: string;
    /**
     * Full movie path.
     */
    readonly path: string;
    /**
     * Quality profile ID.
     */
    readonly qualityProfileId: number;
    /**
     * Movie status.
     */
    readonly status: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Movie title.
     */
    readonly title: string;
    /**
     * TMDB ID.
     */
    readonly tmdbId: number;
    /**
     * Website.
     */
    readonly website: string;
    /**
     * Year.
     */
    readonly year: number;
    /**
     * Youtube trailer ID.
     */
    readonly youtubeTrailerId: string;
}
/**
 * <!-- subcategory:Movies -->Single Movie.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.Movies.getMovie({
 *     tmdbId: 123,
 * });
 * ```
 */
export function getMovieOutput(args: GetMovieOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMovieResult> {
    return pulumi.output(args).apply((a: any) => getMovie(a, opts))
}

/**
 * A collection of arguments for invoking getMovie.
 */
export interface GetMovieOutputArgs {
    /**
     * TMDB ID.
     */
    tmdbId: pulumi.Input<number>;
}
