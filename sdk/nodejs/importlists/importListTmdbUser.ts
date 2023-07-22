// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List TMDB User resource.
 * For more information refer to [Import List](https://wiki.servarr.com/radarr/settings#import-lists) and [TMDB User](https://wiki.servarr.com/radarr/supported#tmdbuserimport).
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:ImportLists/importListTmdbUser:ImportListTmdbUser example 1
 * ```
 */
export class ImportListTmdbUser extends pulumi.CustomResource {
    /**
     * Get an existing ImportListTmdbUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListTmdbUserState, opts?: pulumi.CustomResourceOptions): ImportListTmdbUser {
        return new ImportListTmdbUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:ImportLists/importListTmdbUser:ImportListTmdbUser';

    /**
     * Returns true if the given object is an instance of ImportListTmdbUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListTmdbUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListTmdbUser.__pulumiType;
    }

    /**
     * Access token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * User ID.
     */
    public readonly accountId!: pulumi.Output<string>;
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
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * TMDB list type. `1` Watchlist, `2` Recommendations, `3` Rated, `4` Favorite.
     */
    public readonly userListType!: pulumi.Output<number>;

    /**
     * Create a ImportListTmdbUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListTmdbUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListTmdbUserArgs | ImportListTmdbUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListTmdbUserState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["enableAuto"] = state ? state.enableAuto : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["minimumAvailability"] = state ? state.minimumAvailability : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = state ? state.searchOnAdd : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userListType"] = state ? state.userListType : undefined;
        } else {
            const args = argsOrState as ImportListTmdbUserArgs | undefined;
            if ((!args || args.accessToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessToken'");
            }
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
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
            if ((!args || args.userListType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userListType'");
            }
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["enableAuto"] = args ? args.enableAuto : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["minimumAvailability"] = args ? args.minimumAvailability : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = args ? args.searchOnAdd : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userListType"] = args ? args.userListType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportListTmdbUser.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListTmdbUser resources.
 */
export interface ImportListTmdbUserState {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * User ID.
     */
    accountId?: pulumi.Input<string>;
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
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * TMDB list type. `1` Watchlist, `2` Recommendations, `3` Rated, `4` Favorite.
     */
    userListType?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ImportListTmdbUser resource.
 */
export interface ImportListTmdbUserArgs {
    /**
     * Access token.
     */
    accessToken: pulumi.Input<string>;
    /**
     * User ID.
     */
    accountId: pulumi.Input<string>;
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
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * TMDB list type. `1` Watchlist, `2` Recommendations, `3` Rated, `4` Favorite.
     */
    userListType: pulumi.Input<number>;
}
