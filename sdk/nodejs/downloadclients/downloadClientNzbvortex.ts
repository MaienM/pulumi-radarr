// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Nzbvortex resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/radarr/settings#download-clients) and [Nzbvortex](https://wiki.servarr.com/radarr/supported#nzbvortex).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.downloadclients.DownloadClientNzbvortex("example", {
 *     enable: true,
 *     host: "nzbvortex",
 *     name: "Example",
 *     port: 6789,
 *     priority: 1,
 *     urlBase: "/nzbvortex/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:DownloadClients/downloadClientNzbvortex:DownloadClientNzbvortex example 1
 * ```
 */
export class DownloadClientNzbvortex extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientNzbvortex resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientNzbvortexState, opts?: pulumi.CustomResourceOptions): DownloadClientNzbvortex {
        return new DownloadClientNzbvortex(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:DownloadClients/downloadClientNzbvortex:DownloadClientNzbvortex';

    /**
     * Returns true if the given object is an instance of DownloadClientNzbvortex.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientNzbvortex {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientNzbvortex.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Movie category.
     */
    public readonly movieCategory!: pulumi.Output<string>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Older Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    public readonly olderMoviePriority!: pulumi.Output<number>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Recent Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    public readonly recentMoviePriority!: pulumi.Output<number>;
    /**
     * Remove completed downloads flag.
     */
    public readonly removeCompletedDownloads!: pulumi.Output<boolean>;
    /**
     * Remove failed downloads flag.
     */
    public readonly removeFailedDownloads!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Base URL.
     */
    public readonly urlBase!: pulumi.Output<string>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;

    /**
     * Create a DownloadClientNzbvortex resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientNzbvortexArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientNzbvortexArgs | DownloadClientNzbvortexState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientNzbvortexState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["movieCategory"] = state ? state.movieCategory : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["olderMoviePriority"] = state ? state.olderMoviePriority : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["recentMoviePriority"] = state ? state.recentMoviePriority : undefined;
            resourceInputs["removeCompletedDownloads"] = state ? state.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = state ? state.removeFailedDownloads : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
        } else {
            const args = argsOrState as DownloadClientNzbvortexArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["movieCategory"] = args ? args.movieCategory : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["olderMoviePriority"] = args ? args.olderMoviePriority : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["recentMoviePriority"] = args ? args.recentMoviePriority : undefined;
            resourceInputs["removeCompletedDownloads"] = args ? args.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = args ? args.removeFailedDownloads : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClientNzbvortex.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientNzbvortex resources.
 */
export interface DownloadClientNzbvortexState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Movie category.
     */
    movieCategory?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Older Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    olderMoviePriority?: pulumi.Input<number>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Recent Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    recentMoviePriority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DownloadClientNzbvortex resource.
 */
export interface DownloadClientNzbvortexArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Movie category.
     */
    movieCategory?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Older Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    olderMoviePriority?: pulumi.Input<number>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Recent Movie priority. `-1` Low, `0` Normal, `1` High.
     */
    recentMoviePriority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}
