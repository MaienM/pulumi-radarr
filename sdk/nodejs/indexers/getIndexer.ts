// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Single Indexer.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.Indexers.getIndexer({
 *     name: "Example",
 * });
 * ```
 */
export function getIndexer(args: GetIndexerArgs, opts?: pulumi.InvokeOptions): Promise<GetIndexerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("radarr:Indexers/getIndexer:getIndexer", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getIndexer.
 */
export interface GetIndexerArgs {
    /**
     * Indexer name.
     */
    name: string;
}

/**
 * A collection of values returned by getIndexer.
 */
export interface GetIndexerResult {
    /**
     * Additional parameters.
     */
    readonly additionalParameters: string;
    /**
     * Allow zero size files.
     */
    readonly allowZeroSize: boolean;
    /**
     * API key.
     */
    readonly apiKey: string;
    /**
     * API path.
     */
    readonly apiPath: string;
    /**
     * API User.
     */
    readonly apiUser: string;
    /**
     * Base URL.
     */
    readonly baseUrl: string;
    /**
     * Captcha token.
     */
    readonly captchaToken: string;
    /**
     * Series list.
     */
    readonly categories: number[];
    /**
     * Codecs.
     */
    readonly codecs: number[];
    /**
     * Indexer configuration template.
     */
    readonly configContract: string;
    /**
     * Cookie.
     */
    readonly cookie: string;
    /**
     * Delay before grabbing.
     */
    readonly delay: number;
    /**
     * Download client ID.
     */
    readonly downloadClientId: number;
    /**
     * Enable automatic search flag.
     */
    readonly enableAutomaticSearch: boolean;
    /**
     * Enable interactive search flag.
     */
    readonly enableInteractiveSearch: boolean;
    /**
     * Enable RSS flag.
     */
    readonly enableRss: boolean;
    /**
     * Indexer ID.
     */
    readonly id: number;
    /**
     * Indexer implementation name.
     */
    readonly implementation: string;
    /**
     * Mediumd.
     */
    readonly mediums: number[];
    /**
     * Minimum seeders.
     */
    readonly minimumSeeders: number;
    /**
     * Language list.
     */
    readonly multiLanguages: number[];
    /**
     * Indexer name.
     */
    readonly name: string;
    /**
     * Passkey.
     */
    readonly passkey: string;
    /**
     * Priority.
     */
    readonly priority: number;
    /**
     * Protocol. Valid values are 'usenet' and 'torrent'.
     */
    readonly protocol: string;
    /**
     * Allow ranked only.
     */
    readonly rankedOnly: boolean;
    /**
     * Remove year.
     */
    readonly removeYear: boolean;
    /**
     * Computed flags.
     */
    readonly requiredFlags: number[];
    /**
     * Seed ratio.
     */
    readonly seedRatio: number;
    /**
     * Seed time.
     */
    readonly seedTime: number;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Username.
     */
    readonly user: string;
    /**
     * Username.
     */
    readonly username: string;
}
/**
 * <!-- subcategory:Indexers -->Single Indexer.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.Indexers.getIndexer({
 *     name: "Example",
 * });
 * ```
 */
export function getIndexerOutput(args: GetIndexerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIndexerResult> {
    return pulumi.output(args).apply((a: any) => getIndexer(a, opts))
}

/**
 * A collection of arguments for invoking getIndexer.
 */
export interface GetIndexerOutputArgs {
    /**
     * Indexer name.
     */
    name: pulumi.Input<string>;
}
