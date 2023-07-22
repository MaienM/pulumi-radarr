// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->List all available Import Lists.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@pulumi/radarr";
 *
 * const example = radarr.ImportLists.getImportLists({});
 * ```
 */
export function getImportLists(opts?: pulumi.InvokeOptions): Promise<GetImportListsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("radarr:ImportLists/getImportLists:getImportLists", {
    }, opts);
}

/**
 * A collection of values returned by getImportLists.
 */
export interface GetImportListsResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Import List list.
     */
    readonly importLists: outputs.ImportLists.GetImportListsImportList[];
}
