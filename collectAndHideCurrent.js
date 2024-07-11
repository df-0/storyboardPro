/* quick script that should put all visible layers in a folder, rename them 'previous', and hide the folder*/
// maybe should dupe and clear the layers as well?

function CollectAndHide()
{
    MessageLog.trace("Collecting and hiding");
    project.beginUndoRedoAccum("Collect and hide layers");

    var layM = new LayerManager;
    var sM = new StoryboardManager;

    var selectionManager = new SelectionManager();

    var panelIds = selectionManager.getPanelSelection();
    if (panelIds.length != 1) {
        MessageLog.trace('make sure only one panel is selected');
        return;
    }

    var currentPanelId = panelIds[0];
    MessageLog.trace(currentPanelId);
    var visibleLayers = []
    // get a list of all the visible layers
    for ( var j =  layM.numberOfLayers( currentPanelId ) - 1; j >= 0; --j )
    {
    if ( layM.layerVisibility( currentPanelId, j ) == true )
    {
        //  delLayers += (" Scene: " + sM.nameOfScene( sM.sceneIdOfPanel( currentPanelId ) ) 
        //            + "    Panel: " + sM.nameOfPanel( currentPanelId ) 
        //            + "    Layer: " + layM.layerName( currentPanelId, j ) 
        //            + "\n" );
        visibleLayers.push(layM.layerName( currentPanelId, j ));
            //layM.deleteLayer( currentPanelId, j );
    }

    // file:///C:/Program%20Files%20(x86)/Toon%20Boom%20Animation/Toon%20Boom%20Storyboard%20Pro%2024/help/storyboard/classLayerManager.html#a85bbc8fb35167cd5a94b21992bb0f2b9
    MessageLog.trace("adding group layer");
    addGroupLayer (currentPanelId, layM.numberOfLayers( currentPanelId ) - 1, false, "version_000"); // add a group layer
    MessageLog.trace("Done!");

    // move all the layers into the group layer
    // hide all the layers
    // rename all the layers
    // create new blank versions of the layers

    
    MessageLog.trace(visibleLayers);
    }

    // for ( var i = 0; i < selIds.length; ++ i )
    //     {
    //         var panelId = selIds[i];
             
    //         for ( var j =  layM.numberOfLayers( panelId ) - 1; j >= 0; --j )
    //         {
    //            if ( layM.layerVisibility( panelId, j ) == false )
    //            {
    //                 delLayers += (" Scene: " + sM.nameOfScene( sM.sceneIdOfPanel( panelId ) ) 
    //                           + "    Panel: " + sM.nameOfPanel( panelId ) 
    //                           + "    Layer: " + layM.layerName( panelId, j ) 
    //                           + "\n" );
    //                 layM.deleteLayer( panelId, j );
    //            }
    //         }
    //     }

    project.endUndoRedoAccum();
}

// TESTING ONLY HACK
CollectAndHide();