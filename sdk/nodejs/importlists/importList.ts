// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Generic Import List resource. When possible use a specific resource instead.
 * For more information refer to [Import List](https://wiki.servarr.com/radarr/settings#import-lists).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.importlists.ImportList("example", {
 *     enabled: false,
 *     enableAuto: true,
 *     searchOnAdd: false,
 *     monitor: "movieOnly",
 *     minimumAvailability: "tba",
 *     listType: "program",
 *     rootFolderPath: radarr_root_folder.example.path,
 *     qualityProfileId: radarr_quality_profile.example.id,
 *     name: "Example",
 *     implementation: "RadarrImport",
 *     configContract: "RadarrSettings",
 *     tags: [
 *         1,
 *         2,
 *     ],
 *     tagIds: [
 *         1,
 *         2,
 *     ],
 *     profileIds: [1],
 *     baseUrl: "http://127.0.0.1:8686",
 *     apiKey: "APIKey",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:ImportLists/importList:ImportList example 1
 * ```
 */
export class ImportList extends pulumi.CustomResource {
    /**
     * Get an existing ImportList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListState, opts?: pulumi.CustomResourceOptions): ImportList {
        return new ImportList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:ImportLists/importList:ImportList';

    /**
     * Returns true if the given object is an instance of ImportList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportList.__pulumiType;
    }

    /**
     * Access token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * Account ID.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Auth user.
     */
    public readonly authUser!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Include cast.
     */
    public readonly cast!: pulumi.Output<boolean>;
    /**
     * Include cast director.
     */
    public readonly castDirector!: pulumi.Output<boolean>;
    /**
     * Include cast producer.
     */
    public readonly castProducer!: pulumi.Output<boolean>;
    /**
     * Include cast sound.
     */
    public readonly castSound!: pulumi.Output<boolean>;
    /**
     * Include cast writing.
     */
    public readonly castWriting!: pulumi.Output<boolean>;
    /**
     * Certification.
     */
    public readonly certification!: pulumi.Output<string>;
    /**
     * Company ID.
     */
    public readonly companyId!: pulumi.Output<string>;
    /**
     * ImportList configuration template.
     */
    public readonly configContract!: pulumi.Output<string>;
    /**
     * Enable automatic add flag.
     */
    public readonly enableAuto!: pulumi.Output<boolean>;
    /**
     * Enabled flag.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Exclude genre IDs.
     */
    public readonly excludeGenreIds!: pulumi.Output<string>;
    /**
     * Expires.
     */
    public readonly expires!: pulumi.Output<string>;
    /**
     * Genres.
     */
    public readonly genres!: pulumi.Output<string>;
    /**
     * ImportList implementation name.
     */
    public readonly implementation!: pulumi.Output<string>;
    /**
     * Include genre IDs.
     */
    public readonly includeGenreIds!: pulumi.Output<string>;
    /**
     * Keyword ID.
     */
    public readonly keywordId!: pulumi.Output<string>;
    /**
     * Language code.
     */
    public readonly languageCode!: pulumi.Output<number>;
    /**
     * limit.
     */
    public readonly limit!: pulumi.Output<number>;
    /**
     * Link.
     */
    public readonly link!: pulumi.Output<string>;
    /**
     * List ID.
     */
    public readonly listId!: pulumi.Output<string>;
    /**
     * List order.
     */
    public readonly listOrder!: pulumi.Output<number>;
    /**
     * List type.
     */
    public readonly listType!: pulumi.Output<string>;
    /**
     * List name.
     */
    public readonly listname!: pulumi.Output<string>;
    /**
     * Min score.
     */
    public readonly minScore!: pulumi.Output<number>;
    /**
     * Min vote average.
     */
    public readonly minVoteAverage!: pulumi.Output<string>;
    /**
     * Min votes.
     */
    public readonly minVotes!: pulumi.Output<string>;
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
     * Only active.
     */
    public readonly onlyActive!: pulumi.Output<boolean>;
    /**
     * Person ID.
     */
    public readonly personId!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Profile IDs.
     */
    public readonly profileIds!: pulumi.Output<number[]>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Rating.
     */
    public readonly rating!: pulumi.Output<string>;
    /**
     * Refresh token.
     */
    public readonly refreshToken!: pulumi.Output<string>;
    /**
     * Root folder path.
     */
    public readonly rootFolderPath!: pulumi.Output<string>;
    /**
     * Search on add flag.
     */
    public readonly searchOnAdd!: pulumi.Output<boolean>;
    /**
     * Source.
     */
    public readonly source!: pulumi.Output<number>;
    /**
     * Tag IDs.
     */
    public readonly tagIds!: pulumi.Output<number[]>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Certification.
     */
    public readonly tmdbCertification!: pulumi.Output<string>;
    /**
     * TMDB list type.
     */
    public readonly tmdbListType!: pulumi.Output<number>;
    /**
     * Trakt additional parameters.
     */
    public readonly traktAdditionalParameters!: pulumi.Output<string>;
    /**
     * Trakt list type.
     */
    public readonly traktListType!: pulumi.Output<number>;
    /**
     * URL.
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly urlBase!: pulumi.Output<string>;
    /**
     * User list type.
     */
    public readonly userListType!: pulumi.Output<number>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * Years.
     */
    public readonly years!: pulumi.Output<string>;

    /**
     * Create a ImportList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListArgs | ImportListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["authUser"] = state ? state.authUser : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["cast"] = state ? state.cast : undefined;
            resourceInputs["castDirector"] = state ? state.castDirector : undefined;
            resourceInputs["castProducer"] = state ? state.castProducer : undefined;
            resourceInputs["castSound"] = state ? state.castSound : undefined;
            resourceInputs["castWriting"] = state ? state.castWriting : undefined;
            resourceInputs["certification"] = state ? state.certification : undefined;
            resourceInputs["companyId"] = state ? state.companyId : undefined;
            resourceInputs["configContract"] = state ? state.configContract : undefined;
            resourceInputs["enableAuto"] = state ? state.enableAuto : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["excludeGenreIds"] = state ? state.excludeGenreIds : undefined;
            resourceInputs["expires"] = state ? state.expires : undefined;
            resourceInputs["genres"] = state ? state.genres : undefined;
            resourceInputs["implementation"] = state ? state.implementation : undefined;
            resourceInputs["includeGenreIds"] = state ? state.includeGenreIds : undefined;
            resourceInputs["keywordId"] = state ? state.keywordId : undefined;
            resourceInputs["languageCode"] = state ? state.languageCode : undefined;
            resourceInputs["limit"] = state ? state.limit : undefined;
            resourceInputs["link"] = state ? state.link : undefined;
            resourceInputs["listId"] = state ? state.listId : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["listType"] = state ? state.listType : undefined;
            resourceInputs["listname"] = state ? state.listname : undefined;
            resourceInputs["minScore"] = state ? state.minScore : undefined;
            resourceInputs["minVoteAverage"] = state ? state.minVoteAverage : undefined;
            resourceInputs["minVotes"] = state ? state.minVotes : undefined;
            resourceInputs["minimumAvailability"] = state ? state.minimumAvailability : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onlyActive"] = state ? state.onlyActive : undefined;
            resourceInputs["personId"] = state ? state.personId : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["profileIds"] = state ? state.profileIds : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rating"] = state ? state.rating : undefined;
            resourceInputs["refreshToken"] = state ? state.refreshToken : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = state ? state.searchOnAdd : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tmdbCertification"] = state ? state.tmdbCertification : undefined;
            resourceInputs["tmdbListType"] = state ? state.tmdbListType : undefined;
            resourceInputs["traktAdditionalParameters"] = state ? state.traktAdditionalParameters : undefined;
            resourceInputs["traktListType"] = state ? state.traktListType : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["userListType"] = state ? state.userListType : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["years"] = state ? state.years : undefined;
        } else {
            const args = argsOrState as ImportListArgs | undefined;
            if ((!args || args.configContract === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configContract'");
            }
            if ((!args || args.listType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listType'");
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
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["authUser"] = args ? args.authUser : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["cast"] = args ? args.cast : undefined;
            resourceInputs["castDirector"] = args ? args.castDirector : undefined;
            resourceInputs["castProducer"] = args ? args.castProducer : undefined;
            resourceInputs["castSound"] = args ? args.castSound : undefined;
            resourceInputs["castWriting"] = args ? args.castWriting : undefined;
            resourceInputs["certification"] = args ? args.certification : undefined;
            resourceInputs["companyId"] = args ? args.companyId : undefined;
            resourceInputs["configContract"] = args ? args.configContract : undefined;
            resourceInputs["enableAuto"] = args ? args.enableAuto : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["excludeGenreIds"] = args ? args.excludeGenreIds : undefined;
            resourceInputs["expires"] = args ? args.expires : undefined;
            resourceInputs["genres"] = args ? args.genres : undefined;
            resourceInputs["implementation"] = args ? args.implementation : undefined;
            resourceInputs["includeGenreIds"] = args ? args.includeGenreIds : undefined;
            resourceInputs["keywordId"] = args ? args.keywordId : undefined;
            resourceInputs["languageCode"] = args ? args.languageCode : undefined;
            resourceInputs["limit"] = args ? args.limit : undefined;
            resourceInputs["link"] = args ? args.link : undefined;
            resourceInputs["listId"] = args ? args.listId : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["listType"] = args ? args.listType : undefined;
            resourceInputs["listname"] = args ? args.listname : undefined;
            resourceInputs["minScore"] = args ? args.minScore : undefined;
            resourceInputs["minVoteAverage"] = args ? args.minVoteAverage : undefined;
            resourceInputs["minVotes"] = args ? args.minVotes : undefined;
            resourceInputs["minimumAvailability"] = args ? args.minimumAvailability : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onlyActive"] = args ? args.onlyActive : undefined;
            resourceInputs["personId"] = args ? args.personId : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["profileIds"] = args ? args.profileIds : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rating"] = args ? args.rating : undefined;
            resourceInputs["refreshToken"] = args?.refreshToken ? pulumi.secret(args.refreshToken) : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = args ? args.searchOnAdd : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tmdbCertification"] = args ? args.tmdbCertification : undefined;
            resourceInputs["tmdbListType"] = args ? args.tmdbListType : undefined;
            resourceInputs["traktAdditionalParameters"] = args ? args.traktAdditionalParameters : undefined;
            resourceInputs["traktListType"] = args ? args.traktListType : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["userListType"] = args ? args.userListType : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["years"] = args ? args.years : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "apiKey", "refreshToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportList.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportList resources.
 */
export interface ImportListState {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Account ID.
     */
    accountId?: pulumi.Input<string>;
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Auth user.
     */
    authUser?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Include cast.
     */
    cast?: pulumi.Input<boolean>;
    /**
     * Include cast director.
     */
    castDirector?: pulumi.Input<boolean>;
    /**
     * Include cast producer.
     */
    castProducer?: pulumi.Input<boolean>;
    /**
     * Include cast sound.
     */
    castSound?: pulumi.Input<boolean>;
    /**
     * Include cast writing.
     */
    castWriting?: pulumi.Input<boolean>;
    /**
     * Certification.
     */
    certification?: pulumi.Input<string>;
    /**
     * Company ID.
     */
    companyId?: pulumi.Input<string>;
    /**
     * ImportList configuration template.
     */
    configContract?: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Exclude genre IDs.
     */
    excludeGenreIds?: pulumi.Input<string>;
    /**
     * Expires.
     */
    expires?: pulumi.Input<string>;
    /**
     * Genres.
     */
    genres?: pulumi.Input<string>;
    /**
     * ImportList implementation name.
     */
    implementation?: pulumi.Input<string>;
    /**
     * Include genre IDs.
     */
    includeGenreIds?: pulumi.Input<string>;
    /**
     * Keyword ID.
     */
    keywordId?: pulumi.Input<string>;
    /**
     * Language code.
     */
    languageCode?: pulumi.Input<number>;
    /**
     * limit.
     */
    limit?: pulumi.Input<number>;
    /**
     * Link.
     */
    link?: pulumi.Input<string>;
    /**
     * List ID.
     */
    listId?: pulumi.Input<string>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * List type.
     */
    listType?: pulumi.Input<string>;
    /**
     * List name.
     */
    listname?: pulumi.Input<string>;
    /**
     * Min score.
     */
    minScore?: pulumi.Input<number>;
    /**
     * Min vote average.
     */
    minVoteAverage?: pulumi.Input<string>;
    /**
     * Min votes.
     */
    minVotes?: pulumi.Input<string>;
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
     * Only active.
     */
    onlyActive?: pulumi.Input<boolean>;
    /**
     * Person ID.
     */
    personId?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Profile IDs.
     */
    profileIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Rating.
     */
    rating?: pulumi.Input<string>;
    /**
     * Refresh token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * Source.
     */
    source?: pulumi.Input<number>;
    /**
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Certification.
     */
    tmdbCertification?: pulumi.Input<string>;
    /**
     * TMDB list type.
     */
    tmdbListType?: pulumi.Input<number>;
    /**
     * Trakt additional parameters.
     */
    traktAdditionalParameters?: pulumi.Input<string>;
    /**
     * Trakt list type.
     */
    traktListType?: pulumi.Input<number>;
    /**
     * URL.
     */
    url?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * User list type.
     */
    userListType?: pulumi.Input<number>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * Years.
     */
    years?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImportList resource.
 */
export interface ImportListArgs {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Account ID.
     */
    accountId?: pulumi.Input<string>;
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Auth user.
     */
    authUser?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Include cast.
     */
    cast?: pulumi.Input<boolean>;
    /**
     * Include cast director.
     */
    castDirector?: pulumi.Input<boolean>;
    /**
     * Include cast producer.
     */
    castProducer?: pulumi.Input<boolean>;
    /**
     * Include cast sound.
     */
    castSound?: pulumi.Input<boolean>;
    /**
     * Include cast writing.
     */
    castWriting?: pulumi.Input<boolean>;
    /**
     * Certification.
     */
    certification?: pulumi.Input<string>;
    /**
     * Company ID.
     */
    companyId?: pulumi.Input<string>;
    /**
     * ImportList configuration template.
     */
    configContract: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Exclude genre IDs.
     */
    excludeGenreIds?: pulumi.Input<string>;
    /**
     * Expires.
     */
    expires?: pulumi.Input<string>;
    /**
     * Genres.
     */
    genres?: pulumi.Input<string>;
    /**
     * ImportList implementation name.
     */
    implementation?: pulumi.Input<string>;
    /**
     * Include genre IDs.
     */
    includeGenreIds?: pulumi.Input<string>;
    /**
     * Keyword ID.
     */
    keywordId?: pulumi.Input<string>;
    /**
     * Language code.
     */
    languageCode?: pulumi.Input<number>;
    /**
     * limit.
     */
    limit?: pulumi.Input<number>;
    /**
     * Link.
     */
    link?: pulumi.Input<string>;
    /**
     * List ID.
     */
    listId?: pulumi.Input<string>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * List type.
     */
    listType: pulumi.Input<string>;
    /**
     * List name.
     */
    listname?: pulumi.Input<string>;
    /**
     * Min score.
     */
    minScore?: pulumi.Input<number>;
    /**
     * Min vote average.
     */
    minVoteAverage?: pulumi.Input<string>;
    /**
     * Min votes.
     */
    minVotes?: pulumi.Input<string>;
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
     * Only active.
     */
    onlyActive?: pulumi.Input<boolean>;
    /**
     * Person ID.
     */
    personId?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Profile IDs.
     */
    profileIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Quality profile ID.
     */
    qualityProfileId: pulumi.Input<number>;
    /**
     * Rating.
     */
    rating?: pulumi.Input<string>;
    /**
     * Refresh token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * Root folder path.
     */
    rootFolderPath: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * Source.
     */
    source?: pulumi.Input<number>;
    /**
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Certification.
     */
    tmdbCertification?: pulumi.Input<string>;
    /**
     * TMDB list type.
     */
    tmdbListType?: pulumi.Input<number>;
    /**
     * Trakt additional parameters.
     */
    traktAdditionalParameters?: pulumi.Input<string>;
    /**
     * Trakt list type.
     */
    traktListType?: pulumi.Input<number>;
    /**
     * URL.
     */
    url?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * User list type.
     */
    userListType?: pulumi.Input<number>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
    /**
     * Years.
     */
    years?: pulumi.Input<string>;
}
