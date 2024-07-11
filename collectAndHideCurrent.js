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