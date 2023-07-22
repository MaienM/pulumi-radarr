// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Indexer PassThePopcorn resource.
 * For more information refer to [Indexer](https://wiki.servarr.com/radarr/settings#indexers) and [PassThePopcorn](https://wiki.servarr.com/radarr/supported#passthepopcorn).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.indexers.IndexerPassThePopcorn("example", {
 *     apiKey: "Key",
 *     apiUser: "User",
 *     baseUrl: "https://passthepopcorn.me",
 *     enableAutomaticSearch: true,
 *     minimumSeeders: 1,
 *     name: "Example",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:Indexers/indexerPassThePopcorn:IndexerPassThePopcorn example 1
 * ```
 */
export class IndexerPassThePopcorn extends pulumi.CustomResource {
    /**
     * Get an existing IndexerPassThePopcorn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerPassThePopcornState, opts?: pulumi.CustomResourceOptions): IndexerPassThePopcorn {
        return new IndexerPassThePopcorn(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:Indexers/indexerPassThePopcorn:IndexerPassThePopcorn';

    /**
     * Returns true if the given object is an instance of IndexerPassThePopcorn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IndexerPassThePopcorn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IndexerPassThePopcorn.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * API user.
     */
    public readonly apiUser!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Download client ID.
     */
    public readonly downloadClientId!: pulumi.Output<number>;
    /**
     * Enable automatic search flag.
     */
    public readonly enableAutomaticSearch!: pulumi.Output<boolean>;
    /**
     * Enable interactive search flag.
     */
    public readonly enableInteractiveSearch!: pulumi.Output<boolean>;
    /**
     * Enable RSS flag.
     */
    public readonly enableRss!: pulumi.Output<boolean>;
    /**
     * Minimum seeders.
     */
    public readonly minimumSeeders!: pulumi.Output<number>;
    /**
     * Languages list.
     */
    public readonly multiLanguages!: pulumi.Output<number[]>;
    /**
     * IndexerPassThePopcorn name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Flag list.
     */
    public readonly requiredFlags!: pulumi.Output<number[]>;
    /**
     * Seed ratio.
     */
    public readonly seedRatio!: pulumi.Output<number>;
    /**
     * Seed time.
     */
    public readonly seedTime!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a IndexerPassThePopcorn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerPassThePopcornArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerPassThePopcornArgs | IndexerPassThePopcornState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerPassThePopcornState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["apiUser"] = state ? state.apiUser : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["downloadClientId"] = state ? state.downloadClientId : undefined;
            resourceInputs["enableAutomaticSearch"] = state ? state.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = state ? state.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = state ? state.enableRss : undefined;
            resourceInputs["minimumSeeders"] = state ? state.minimumSeeders : undefined;
            resourceInputs["multiLanguages"] = state ? state.multiLanguages : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["requiredFlags"] = state ? state.requiredFlags : undefined;
            resourceInputs["seedRatio"] = state ? state.seedRatio : undefined;
            resourceInputs["seedTime"] = state ? state.seedTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IndexerPassThePopcornArgs | undefined;
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["apiUser"] = args ? args.apiUser : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["downloadClientId"] = args ? args.downloadClientId : undefined;
            resourceInputs["enableAutomaticSearch"] = args ? args.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = args ? args.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = args ? args.enableRss : undefined;
            resourceInputs["minimumSeeders"] = args ? args.minimumSeeders : undefined;
            resourceInputs["multiLanguages"] = args ? args.multiLanguages : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["requiredFlags"] = args ? args.requiredFlags : undefined;
            resourceInputs["seedRatio"] = args ? args.seedRatio : undefined;
            resourceInputs["seedTime"] = args ? args.seedTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IndexerPassThePopcorn.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IndexerPassThePopcorn resources.
 */
export interface IndexerPassThePopcornState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * API user.
     */
    apiUser?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Download client ID.
     */
    downloadClientId?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * Languages list.
     */
    multiLanguages?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * IndexerPassThePopcorn name.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Flag list.
     */
    requiredFlags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a IndexerPassThePopcorn resource.
 */
export interface IndexerPassThePopcornArgs {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * API user.
     */
    apiUser?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl: pulumi.Input<string>;
    /**
     * Download client ID.
     */
    downloadClientId?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * Languages list.
     */
    multiLanguages?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * IndexerPassThePopcorn name.
     */
    name: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Flag list.
     */
    requiredFlags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
