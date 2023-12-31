// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List Radarr resource.
 * For more information refer to [Import List](https://wiki.servarr.com/radarr/settings#import-lists) and [Radarr](https://wiki.servarr.com/radarr/supported#radarrimport).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.importlists.ImportListRadarr("example", {
 *     apiKey: "ExampleAPIKey",
 *     enableAuto: false,
 *     enabled: true,
 *     minimumAvailability: "tba",
 *     monitor: "none",
 *     name: "Example",
 *     profileIds: [1],
 *     qualityProfileId: 1,
 *     rootFolderPath: "/config",
 *     searchOnAdd: false,
 *     tagIds: [
 *         1,
 *         2,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:ImportLists/importListRadarr:ImportListRadarr example 1
 * ```
 */
export class ImportListRadarr extends pulumi.CustomResource {
    /**
     * Get an existing ImportListRadarr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListRadarrState, opts?: pulumi.CustomResourceOptions): ImportListRadarr {
        return new ImportListRadarr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:ImportLists/importListRadarr:ImportListRadarr';

    /**
     * Returns true if the given object is an instance of ImportListRadarr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListRadarr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListRadarr.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Enable automatic add flag.
     */
    public readonly enableAuto!: pulumi.Output<boolean>;
    /**
     * Enabled flag.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * List order.
     */
    public readonly listOrder!: pulumi.Output<number>;
    /**
     * Minimum availability.
     */
    public readonly minimumAvailability!: pulumi.Output<string>;
    /**
     * Should monitor.
     */
    public readonly monitor!: pulumi.Output<string>;
    /**
     * Import List name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Profile IDs.
     */
    public readonly profileIds!: pulumi.Output<number[]>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Root folder path.
     */
    public readonly rootFolderPath!: pulumi.Output<string>;
    /**
     * Search on add flag.
     */
    public readonly searchOnAdd!: pulumi.Output<boolean>;
    /**
     * Tag IDs.
     */
    public readonly tagIds!: pulumi.Output<number[]>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a ImportListRadarr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListRadarrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListRadarrArgs | ImportListRadarrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListRadarrState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["enableAuto"] = state ? state.enableAuto : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["minimumAvailability"] = state ? state.minimumAvailability : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileIds"] = state ? state.profileIds : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = state ? state.searchOnAdd : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ImportListRadarrArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
            }
            if ((!args || args.minimumAvailability === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minimumAvailability'");
            }
            if ((!args || args.monitor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitor'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.qualityProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'qualityProfileId'");
            }
            if ((!args || args.rootFolderPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rootFolderPath'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["enableAuto"] = args ? args.enableAuto : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["minimumAvailability"] = args ? args.minimumAvailability : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["profileIds"] = args ? args.profileIds : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = args ? args.searchOnAdd : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportListRadarr.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListRadarr resources.
 */
export interface ImportListRadarrState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Minimum availability.
     */
    minimumAvailability?: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    monitor?: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name?: pulumi.Input<string>;
    /**
     * Profile IDs.
     */
    profileIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a ImportListRadarr resource.
 */
export interface ImportListRadarrArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Minimum availability.
     */
    minimumAvailability: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    monitor: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
    /**
     * Profile IDs.
     */
    profileIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Quality profile ID.
     */
    qualityProfileId: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
