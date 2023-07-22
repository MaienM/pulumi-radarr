// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package radarr

import (
	_ "embed"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/MaienM/pulumi-radarr/provider/pkg/version"
	shimprovider "github.com/devopsarr/terraform-provider-radarr/shim"
	"github.com/ettle/strcase"
	pf "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

//go:embed cmd/pulumi-resource-radarr/bridge-metadata.json
var bridgeMetadata []byte

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	mainMod            = "index" // the radarr module
	modDownloadClients = "DownloadClient"
	modImportLists     = "ImportLists"
	modIndexers        = "Indexers"
	modLanguages       = "Languages"
	modMediaManagement = "MediaManagement"
	modMetadata        = "Metadata"
	modMovies          = "Movies"
	modNotifications   = "Notifications"
	modProfiles        = "Profiles"
	modStatus          = "Status"
	modTags            = "Tags"
)

func convertName(name string) string {
	idx := strings.Index(name, "_")
	contract.Assertf(idx > 0 && idx < len(name)-1, "Invalid snake case name %s", name)
	name = name[idx+1:]
	contract.Assertf(len(name) > 0, "Invalid snake case name %s", name)
	return strcase.ToPascal(name)
}

func makeDataSource(mod string, name string) tokens.ModuleMember {
	name = convertName(name)
	return tfbridge.MakeDataSource("radarr", mod, "get"+name)
}

func makeResource(mod string, res string) tokens.Type {
	return tfbridge.MakeResource("radarr", mod, convertName(res))
}

// Provider returns additional overlaid schema and metadata associated with the provider..
func Provider() tfbridge.ProviderInfo {
	// Instantiate the Terraform provider
	p := pf.ShimProvider(shimprovider.NewProvider(version.Version)())

	// Create a Pulumi provider mapping
	return tfbridge.ProviderInfo{
		Name: "radarr",
		P:    p,
		// DisplayName is a way to be able to change the casing of the provider
		// name when being displayed on the Pulumi registry
		DisplayName: "radarr",
		// The default publisher for all packages is Pulumi.
		// Change this to your personal name (or a company name) that you
		// would like to be shown in the Pulumi Registry if this package is published
		// there.
		Publisher: "MaienM",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://raw.githubusercontent.com/MaienM/pulumi-radarr/main/docs/radarr.png",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "github://api.github.com/MaienM/pulumi-radarr",
		Description:       "A Pulumi package for creating and managing a radarr application.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords: []string{
			"pulumi",
			"radarr",
			"category/infrastructure",
		},
		License:    "Apache-2.0",
		Homepage:   "https://github.com/MaienM/pulumi-radarr",
		Repository: "https://github.com/MaienM/pulumi-radarr",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this
		// should match the TF provider module's require directive, not any replace directives.
		Version:      version.Version,
		GitHubOrg:    "devopsarr",
		MetadataInfo: tfbridge.NewProviderMetadata(bridgeMetadata),
		Config:       map[string]*tfbridge.SchemaInfo{
			// Add any required configuration here, or remove the example below if
			// no additional points are required.
			// "region": {
			// 	Type: tfbridge.MakeType("region", "Region"),
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"AWS_REGION", "AWS_DEFAULT_REGION"},
			// 	},
			// },
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"radarr_download_client":                          {Tok: makeResource(modDownloadClients, "radarr_download_client")},
			"radarr_download_client_aria2":                    {Tok: makeResource(modDownloadClients, "radarr_download_client_aria2")},
			"radarr_download_client_config":                   {Tok: makeResource(modDownloadClients, "radarr_download_client_config")},
			"radarr_download_client_deluge":                   {Tok: makeResource(modDownloadClients, "radarr_download_client_deluge")},
			"radarr_download_client_flood":                    {Tok: makeResource(modDownloadClients, "radarr_download_client_flood")},
			"radarr_download_client_freebox":                  {Tok: makeResource(modDownloadClients, "radarr_download_client_freebox")},
			"radarr_download_client_hadouken":                 {Tok: makeResource(modDownloadClients, "radarr_download_client_hadouken")},
			"radarr_download_client_nzbget":                   {Tok: makeResource(modDownloadClients, "radarr_download_client_nzbget")},
			"radarr_download_client_nzbvortex":                {Tok: makeResource(modDownloadClients, "radarr_download_client_nzbvortex")},
			"radarr_download_client_pneumatic":                {Tok: makeResource(modDownloadClients, "radarr_download_client_pneumatic")},
			"radarr_download_client_qbittorrent":              {Tok: makeResource(modDownloadClients, "radarr_download_client_qbittorrent")},
			"radarr_download_client_rtorrent":                 {Tok: makeResource(modDownloadClients, "radarr_download_client_rtorrent")},
			"radarr_download_client_sabnzbd":                  {Tok: makeResource(modDownloadClients, "radarr_download_client_sabnzbd")},
			"radarr_download_client_torrent_blackhole":        {Tok: makeResource(modDownloadClients, "radarr_download_client_torrent_blackhole")},
			"radarr_download_client_torrent_download_station": {Tok: makeResource(modDownloadClients, "radarr_download_client_torrent_download_station")},
			"radarr_download_client_transmission":             {Tok: makeResource(modDownloadClients, "radarr_download_client_transmission")},
			"radarr_download_client_usenet_blackhole":         {Tok: makeResource(modDownloadClients, "radarr_download_client_usenet_blackhole")},
			"radarr_download_client_usenet_download_station":  {Tok: makeResource(modDownloadClients, "radarr_download_client_usenet_download_station")},
			"radarr_download_client_utorrent":                 {Tok: makeResource(modDownloadClients, "radarr_download_client_utorrent")},
			"radarr_download_client_vuze":                     {Tok: makeResource(modDownloadClients, "radarr_download_client_vuze")},
			"radarr_remote_path_mapping":                      {Tok: makeResource(modDownloadClients, "radarr_remote_path_mapping")},

			"radarr_import_list":               {Tok: makeResource(modImportLists, "radarr_import_list")},
			"radarr_import_list_config":        {Tok: makeResource(modImportLists, "radarr_import_list_config")},
			"radarr_import_list_couch_potato":  {Tok: makeResource(modImportLists, "radarr_import_list_couch_potato")},
			"radarr_import_list_custom":        {Tok: makeResource(modImportLists, "radarr_import_list_custom")},
			"radarr_import_list_exclusion":     {Tok: makeResource(modImportLists, "radarr_import_list_exclusion")},
			"radarr_import_list_imdb":          {Tok: makeResource(modImportLists, "radarr_import_list_imdb")},
			"radarr_import_list_plex":          {Tok: makeResource(modImportLists, "radarr_import_list_plex")},
			"radarr_import_list_radarr":        {Tok: makeResource(modImportLists, "radarr_import_list_radarr")},
			"radarr_import_list_rss":           {Tok: makeResource(modImportLists, "radarr_import_list_rss")},
			"radarr_import_list_stevenlu":      {Tok: makeResource(modImportLists, "radarr_import_list_stevenlu")},
			"radarr_import_list_stevenlu2":     {Tok: makeResource(modImportLists, "radarr_import_list_stevenlu2")},
			"radarr_import_list_tmdb_company":  {Tok: makeResource(modImportLists, "radarr_import_list_tmdb_company")},
			"radarr_import_list_tmdb_keyword":  {Tok: makeResource(modImportLists, "radarr_import_list_tmdb_keyword")},
			"radarr_import_list_tmdb_list":     {Tok: makeResource(modImportLists, "radarr_import_list_tmdb_list")},
			"radarr_import_list_tmdb_person":   {Tok: makeResource(modImportLists, "radarr_import_list_tmdb_person")},
			"radarr_import_list_tmdb_popular":  {Tok: makeResource(modImportLists, "radarr_import_list_tmdb_popular")},
			"radarr_import_list_tmdb_user":     {Tok: makeResource(modImportLists, "radarr_import_list_tmdb_user")},
			"radarr_import_list_trakt_list":    {Tok: makeResource(modImportLists, "radarr_import_list_trakt_list")},
			"radarr_import_list_trakt_popular": {Tok: makeResource(modImportLists, "radarr_import_list_trakt_popular")},
			"radarr_import_list_trakt_user":    {Tok: makeResource(modImportLists, "radarr_import_list_trakt_user")},

			"radarr_indexer":                  {Tok: makeResource(modIndexers, "radarr_indexer")},
			"radarr_indexer_config":           {Tok: makeResource(modIndexers, "radarr_indexer_config")},
			"radarr_indexer_filelist":         {Tok: makeResource(modIndexers, "radarr_indexer_filelist")},
			"radarr_indexer_hdbits":           {Tok: makeResource(modIndexers, "radarr_indexer_hdbits")},
			"radarr_indexer_iptorrents":       {Tok: makeResource(modIndexers, "radarr_indexer_iptorrents")},
			"radarr_indexer_newznab":          {Tok: makeResource(modIndexers, "radarr_indexer_newznab")},
			"radarr_indexer_nyaa":             {Tok: makeResource(modIndexers, "radarr_indexer_nyaa")},
			"radarr_indexer_omgwtfnzbs":       {Tok: makeResource(modIndexers, "radarr_indexer_omgwtfnzbs")},
			"radarr_indexer_pass_the_popcorn": {Tok: makeResource(modIndexers, "radarr_indexer_pass_the_popcorn")},
			"radarr_indexer_rarbg":            {Tok: makeResource(modIndexers, "radarr_indexer_rarbg")},
			"radarr_indexer_torrent_potato":   {Tok: makeResource(modIndexers, "radarr_indexer_torrent_potato")},
			"radarr_indexer_torrent_rss":      {Tok: makeResource(modIndexers, "radarr_indexer_torrent_rss")},
			"radarr_indexer_torznab":          {Tok: makeResource(modIndexers, "radarr_indexer_torznab")},
			"radarr_restriction":              {Tok: makeResource(modIndexers, "radarr_restriction")},

			"radarr_media_management": {Tok: makeResource(modMediaManagement, "radarr_media_management")},
			"radarr_naming":           {Tok: makeResource(modMediaManagement, "radarr_naming")},
			"radarr_root_folder":      {Tok: makeResource(modMediaManagement, "radarr_root_folder")},

			"radarr_metadata":         {Tok: makeResource(modMetadata, "radarr_metadata")},
			"radarr_metadata_config":  {Tok: makeResource(modMetadata, "radarr_metadata_config")},
			"radarr_metadata_emby":    {Tok: makeResource(modMetadata, "radarr_metadata_emby")},
			"radarr_metadata_kodi":    {Tok: makeResource(modMetadata, "radarr_metadata_kodi")},
			"radarr_metadata_roksbox": {Tok: makeResource(modMetadata, "radarr_metadata_roksbox")},
			"radarr_metadata_wdtv":    {Tok: makeResource(modMetadata, "radarr_metadata_wdtv")},

			"radarr_movie": {Tok: makeResource(modMovies, "radarr_movie")},

			"radarr_notification":                  {Tok: makeResource(modNotifications, "radarr_notification")},
			"radarr_notification_boxcar":           {Tok: makeResource(modNotifications, "radarr_notification_boxcar")},
			"radarr_notification_custom_script":    {Tok: makeResource(modNotifications, "radarr_notification_custom_script")},
			"radarr_notification_discord":          {Tok: makeResource(modNotifications, "radarr_notification_discord")},
			"radarr_notification_email":            {Tok: makeResource(modNotifications, "radarr_notification_email")},
			"radarr_notification_emby":             {Tok: makeResource(modNotifications, "radarr_notification_emby")},
			"radarr_notification_gotify":           {Tok: makeResource(modNotifications, "radarr_notification_gotify")},
			"radarr_notification_join":             {Tok: makeResource(modNotifications, "radarr_notification_join")},
			"radarr_notification_kodi":             {Tok: makeResource(modNotifications, "radarr_notification_kodi")},
			"radarr_notification_mailgun":          {Tok: makeResource(modNotifications, "radarr_notification_mailgun")},
			"radarr_notification_notifiarr":        {Tok: makeResource(modNotifications, "radarr_notification_notifiarr")},
			"radarr_notification_ntfy":             {Tok: makeResource(modNotifications, "radarr_notification_ntfy")},
			"radarr_notification_plex":             {Tok: makeResource(modNotifications, "radarr_notification_plex")},
			"radarr_notification_prowl":            {Tok: makeResource(modNotifications, "radarr_notification_prowl")},
			"radarr_notification_pushbullet":       {Tok: makeResource(modNotifications, "radarr_notification_pushbullet")},
			"radarr_notification_pushover":         {Tok: makeResource(modNotifications, "radarr_notification_pushover")},
			"radarr_notification_sendgrid":         {Tok: makeResource(modNotifications, "radarr_notification_sendgrid")},
			"radarr_notification_simplepush":       {Tok: makeResource(modNotifications, "radarr_notification_simplepush")},
			"radarr_notification_slack":            {Tok: makeResource(modNotifications, "radarr_notification_slack")},
			"radarr_notification_synology_indexer": {Tok: makeResource(modNotifications, "radarr_notification_synology_indexer")},
			"radarr_notification_telegram":         {Tok: makeResource(modNotifications, "radarr_notification_telegram")},
			"radarr_notification_trakt":            {Tok: makeResource(modNotifications, "radarr_notification_trakt")},
			"radarr_notification_twitter":          {Tok: makeResource(modNotifications, "radarr_notification_twitter")},
			"radarr_notification_webhook":          {Tok: makeResource(modNotifications, "radarr_notification_webhook")},

			"radarr_custom_format":      {Tok: makeResource(modProfiles, "radarr_custom_format")},
			"radarr_delay_profile":      {Tok: makeResource(modProfiles, "radarr_delay_profile")},
			"radarr_quality_definition": {Tok: makeResource(modProfiles, "radarr_quality_definition")},
			"radarr_quality_profile":    {Tok: makeResource(modProfiles, "radarr_quality_profile")},

			"radarr_tag": {Tok: makeResource(modTags, "radarr_tag")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"radarr_download_client":        {Tok: makeDataSource(modDownloadClients, "radarr_download_client")},
			"radarr_download_client_config": {Tok: makeDataSource(modDownloadClients, "radarr_download_client_config")},
			"radarr_download_clients":       {Tok: makeDataSource(modDownloadClients, "radarr_download_clients")},
			"radarr_remote_path_mapping":    {Tok: makeDataSource(modDownloadClients, "radarr_remote_path_mapping")},
			"radarr_remote_path_mappings":   {Tok: makeDataSource(modDownloadClients, "radarr_remote_path_mappings")},

			"radarr_import_list":            {Tok: makeDataSource(modImportLists, "radarr_import_list")},
			"radarr_import_list_config":     {Tok: makeDataSource(modImportLists, "radarr_import_list_config")},
			"radarr_import_list_exclusion":  {Tok: makeDataSource(modImportLists, "radarr_import_list_exclusion")},
			"radarr_import_list_exclusions": {Tok: makeDataSource(modImportLists, "radarr_import_list_exclusions")},
			"radarr_import_lists":           {Tok: makeDataSource(modImportLists, "radarr_import_lists")},

			"radarr_indexer":        {Tok: makeDataSource(modIndexers, "radarr_indexer")},
			"radarr_indexer_config": {Tok: makeDataSource(modIndexers, "radarr_indexer_config")},
			"radarr_indexers":       {Tok: makeDataSource(modIndexers, "radarr_indexers")},
			"radarr_restriction":    {Tok: makeDataSource(modIndexers, "radarr_restriction")},
			"radarr_restrictions":   {Tok: makeDataSource(modIndexers, "radarr_restrictions")},

			"radarr_language":  {Tok: makeDataSource(modLanguages, "radarr_language")},
			"radarr_languages": {Tok: makeDataSource(modLanguages, "radarr_languages")},

			"radarr_media_management": {Tok: makeDataSource(modMediaManagement, "radarr_media_management")},
			"radarr_naming":           {Tok: makeDataSource(modMediaManagement, "radarr_naming")},
			"radarr_root_folder":      {Tok: makeDataSource(modMediaManagement, "radarr_root_folder")},
			"radarr_root_folders":     {Tok: makeDataSource(modMediaManagement, "radarr_root_folders")},

			"radarr_metadata":           {Tok: makeDataSource(modMetadata, "radarr_metadata")},
			"radarr_metadata_config":    {Tok: makeDataSource(modMetadata, "radarr_metadata_config")},
			"radarr_metadata_consumers": {Tok: makeDataSource(modMetadata, "radarr_metadata_consumers")},

			"radarr_movie":  {Tok: makeDataSource(modMovies, "radarr_movie")},
			"radarr_movies": {Tok: makeDataSource(modMovies, "radarr_movies")},

			"radarr_notification":  {Tok: makeDataSource(modNotifications, "radarr_notification")},
			"radarr_notifications": {Tok: makeDataSource(modNotifications, "radarr_notifications")},

			"radarr_custom_format":                            {Tok: makeDataSource(modProfiles, "radarr_custom_format")},
			"radarr_custom_format_condition":                  {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition")},
			"radarr_custom_format_condition_edition":          {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_edition")},
			"radarr_custom_format_condition_indexer_flag":     {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_indexer_flag")},
			"radarr_custom_format_condition_language":         {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_language")},
			"radarr_custom_format_condition_quality_modifier": {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_quality_modifier")},
			"radarr_custom_format_condition_release_group":    {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_release_group")},
			"radarr_custom_format_condition_release_title":    {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_release_title")},
			"radarr_custom_format_condition_resolution":       {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_resolution")},
			"radarr_custom_format_condition_size":             {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_size")},
			"radarr_custom_format_condition_source":           {Tok: makeDataSource(modProfiles, "radarr_custom_format_condition_source")},
			"radarr_custom_formats":                           {Tok: makeDataSource(modProfiles, "radarr_custom_formats")},
			"radarr_delay_profile":                            {Tok: makeDataSource(modProfiles, "radarr_delay_profile")},
			"radarr_delay_profiles":                           {Tok: makeDataSource(modProfiles, "radarr_delay_profiles")},
			"radarr_quality":                                  {Tok: makeDataSource(modProfiles, "radarr_quality")},
			"radarr_quality_definition":                       {Tok: makeDataSource(modProfiles, "radarr_quality_definition")},
			"radarr_quality_definitions":                      {Tok: makeDataSource(modProfiles, "radarr_quality_definitions")},
			"radarr_quality_profile":                          {Tok: makeDataSource(modProfiles, "radarr_quality_profile")},
			"radarr_quality_profiles":                         {Tok: makeDataSource(modProfiles, "radarr_quality_profiles")},

			"radarr_system_status": {Tok: makeDataSource(modStatus, "radarr_system_status")},

			"radarr_tag":  {Tok: makeDataSource(modTags, "radarr_tag")},
			"radarr_tags": {Tok: makeDataSource(modTags, "radarr_tags")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@maienm/pulumi-radarr",

			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
			// See the documentation for tfbridge.OverlayInfo for how to lay out this
			// section, or refer to the AWS provider. Delete this section if there are
			// no overlay files.
			//Overlay: &tfbridge.OverlayInfo{},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "pulumi_radarr",

			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: filepath.Join(
				fmt.Sprintf("github.com/MaienM/pulumi-%[1]s/sdk/", "radarr"),
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				"radarr",
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "MaienM",

			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
		Java: &tfbridge.JavaInfo{
			BasePackage: "com.maienm",
		},
	}
}
