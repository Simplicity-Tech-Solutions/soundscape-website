<!DOCTYPE html>
<html lang="en"> 
    <head>
        <?php wp_head(); ?>
    </head> 
    <body>
        <?php 
              $htmlFilePath = __DIR__ . '/dist/index.html';
              readfile($htmlFilePath);
              echo file_get_contents($htmlFilePath);
        ?>
        <?php wp_footer(); ?>
    </body>
</html> 
