// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Single ImportListExclusion.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.ImportLists.getImportListExclusion({
 *     tmdbId: 987,
 * });
 * ```
 */
export function getImportListExclusion(args: GetImportListExclusionArgs, opts?: pulumi.InvokeOptions): Promise<GetImportListExclusionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("radarr:ImportLists/getImportListExclusion:getImportListExclusion", {
        "tmdbId": args.tmdbId,
    }, opts);
}

/**
 * A collection of arguments for invoking getImportListExclusion.
 */
export interface GetImportListExclusionArgs {
    /**
     * Movie TMDB ID.
     */
    tmdbId: number;
}

/**
 * A collection of values returned by getImportListExclusion.
 */
export interface GetImportListExclusionResult {
    /**
     * Import List Exclusion ID.
     */
    readonly id: number;
    /**
     * Movie to be excluded.
     */
    readonly title: string;
    /**
     * Movie TMDB ID.
     */
    readonly tmdbId: number;
    /**
     * Year.
     */
    readonly year: number;
}
/**
 * <!-- subcategory:Import Lists -->Single ImportListExclusion.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.ImportLists.getImportListExclusion({
 *     tmdbId: 987,
 * });
 * ```
 */
export function getImportListExclusionOutput(args: GetImportListExclusionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportListExclusionResult> {
    return pulumi.output(args).apply((a: any) => getImportListExclusion(a, opts))
}

/**
 * A collection of arguments for invoking getImportListExclusion.
 */
export interface GetImportListExclusionOutputArgs {
    /**
     * Movie TMDB ID.
     */
    tmdbId: pulumi.Input<number>;
}
